import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
} from "@mui/material";
import ProductosCard from "./componentes/ProductosCard";
import { useNavigate, useParams } from "react-router";
import { getDatabase, ref, onValue, get } from "firebase/database";
import CircularProgress from "@mui/material/CircularProgress";
import app from "../Servicios/firebases";
import Alert from "./componentes/Alert";
import {
  RemoveVaue,
  RemoveVaueDB,
  UpdateDb,
  WriteDb,
  WriteDbPush,
  sendNotif,
} from "../Servicios/DBservices";
import { extract, sendNotification } from "../ayuda";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Cabezal from "./componentes/Cabezal";

const DetallesCompra = () => {
  const [loading, setLoading] = useState(true);
  const [enviado, setEnviado] = useState("");
  const [mensaje, setmensaje] = useState(
    "Seguro que ya se envio ese producto?"
  );

  const [data, setData] = useState(true);
  const [userData, setUserData] = useState([]);
  const [object, setobject] = useState(null);

  const [carddata, setcarddata] = useState([]);

  const [extractedData, setExtractedProductos] = useState(null);
  const theme = useTheme();
  const database = getDatabase(app);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { codigo, contexto } = useParams(); // Access the URL parameter
  const [open, setOpen] = useState(false);

  const handleOpen = (object) => {
    setOpen(true);
  };
  const sendWhatsAppMessage = () => {
    const phoneNumber = `+8613212074721`; // Replace with the target phone number
    const message = `Buenas, se necesita verificacion para que Chekea envie su compra ${data.CompraId} , basta con responder con un OK`; // Replace with your message
    const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Function to detect if the user is on a mobile device
    const isMobileDevice = () => {
      return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    if (isMobileDevice()) {
      // Create a temporary link to test the app URL scheme
      const tempLink = document.createElement("a");
      tempLink.href = appUrl;
      tempLink.style.display = "none";
      document.body.appendChild(tempLink);

      // Attempt to open the WhatsApp app
      tempLink.click();

      // Remove the temporary link
      setTimeout(() => {
        document.body.removeChild(tempLink);
      }, 500);
    } else {
      alert("Please use a mobile device to send the WhatsApp message.");
    }
  };

  // Example button to trigger the function
  <button onClick={sendWhatsAppMessage}>Send WhatsApp Message</button>;

  const receiveForChild = (object, botton) => {
    // checkear el estado si ya se envio o no
    setOpen(true);
    setEnviado(botton);
    if (botton === "Enviado") {
      setobject({
        ...object,
        Estado: "Enviado", // Update the value of Estado field
        Envio: new Date().getTime(),
      });
    } else {
      setmensaje(
        `Seguro que el producto de codigo ${extract(
          String(data.CompraId)
        )} ya fue retirado?\n\n PORFAVOR ASEGURESE!!!`
      );

      setobject({
        ...object,
        Estado: "Retirado", // Update the value of Estado field
        Retiro: new Date().getTime(),
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    // Handle confirm action
    switch (enviado) {
      case "Enviado":
        RemoveVaueDB(
          `GE/Comprador/${data.Comprador}/MisCompras/Verificando/${object.Codigo}`
        )
          .then(() => {
            WriteDb(
              object,
              `GE/Comprador/${data.Comprador}/MisCompras/Enviado/${object.Codigo}`
            ).then(() => {
              UpdateDb(
                { Estado: "Enviado" },
                `GE/Compras/${object.contexto}/${codigo}`
              );
              WriteDbPush(
                {
                  Id: data.Comprador,
                  Mensaje: "Su producto ha sido enviado satisfactoriamente",
                  Titulo: "Producto Enviado",
                },
                `GE/Notificaciones`
              ); // enviar datas al nodo y hacer listening in cservices
            });
          })
          .catch((error) => {
            console.error("Error deleting node:", error);
            // Handle error situation here
          });
        break;
      case "Comprado":
        UpdateDb(
          { Estado: "Comprado" },
          `GE/Comprador/${data.Comprador}/MisCompras/Verificando/${object.Codigo}`
        ).then(() => {
          UpdateDb({ Estado: "Comprado" }, `GE/Compras/Exterior/${codigo}`);
          WriteDbPush(
            {
              Id: data.Comprador,
              Mensaje:
                "Su compra ha sido verificada y a esperas de ser enviado el producto",
              Titulo: "Compra Verificad",
            },
            `GE/Notificaciones`
          );
        });

        break;
      case "Error":
        RemoveVaueDB(
          `GE/Comprador/${data.Comprador}/MisCompras/Verificando/${object.Codigo}`
        )
          .then(() => {
            WriteDb(
              object,
              `GE/Comprador/${data.Comprador}/MisCompras/Error/${object.Codigo}`
            ).then(() => {
              UpdateDb({ Estado: "Error" }, `GE/Compras/Exterior/${codigo}`);
              WriteDbPush(
                {
                  Id: data.Comprador,
                  Mensaje:
                    "Ha surgido un error en su compra,porfavor contacte a atencion al cliente",
                  Titulo: "Error de Compra",
                },
                `GE/Notificaciones`
              ); // enviar datos al nodo y hacer listening in cservices
            });
          })
          .catch((error) => {
            console.error("Error deleting node:", error);
            // Handle error situation here
          });
        break;
      case "Retirado":
        RemoveVaueDB(
          `GE/Comprador/${data.Comprador}/MisCompras/Enviado/${object.Codigo}`
        )
          .then(() => {
            WriteDb(
              object,
              `GE/Comprador/${data.Comprador}/MisCompras/Retirado/${object.Codigo}`
            );
            UpdateDb(
              { Estado: "Retirado" },
              `GE/Compras/${object.contexto}/${codigo}`
            );
            UpdateDb(
              {
                Codigo: object.Producto,
                Vendedor: object.Vendedor,
                contexto: object.contexto,
                Cantidad: object.Cantidad,
                Id: object.Fecha,

                isTrue: false,
                Comprador: data.Comprador,
                Fecha: object.Retiro,
              },
              `GE/NotificacionReb/${object.Fecha}`
            );

            WriteDbPush(
              {
                Id: data.Comprador,
                Mensaje: "Su producto ha sido retirado satisfactoriamente",
                Titulo: "Producto Retirado",
              },
              `GE/Notificaciones`
            );
          })
          .catch((error) => {
            console.error("Error deleting node:", error);
            // Handle error situation here
          });
        break;
      default:
        console.log("ninguno");
        break;
    }

    handleClose();
  };

  const handleObjecto = (obj, valor) => {
    setEnviado(valor);

    switch (valor) {
      case "Comprado":
        setmensaje(
          `Seguro que el producto de codigo ${extract(
            String(data.CompraId)
          )} ya fue verificado?\n\n PORFAVOR ASEGURESE!!!`
        );
        setobject({
          ...obj,
          Estado: "Comprado", // Update the value of Estado field
        });
        break;
      case "Error":
        setmensaje(
          `Seguro que el producto de codigo ${extract(
            String(data.CompraId)
          )} tiene un error?\n\n PORFAVOR ASEGURESE!!!`
        );
        setobject({
          ...object,
          Estado: "Error", // Update the value of Estado field
        });
        break;
      case "Enviado":
        setmensaje(
          `Seguro que el producto de codigo ${extract(
            String(data.CompraId)
          )} ya fue enviado?\n\n PORFAVOR ASEGURESE!!!`
        );
        setobject({
          ...obj,
          Estado: "Enviado", // Update the value of Estado field
          Envio: new Date().getTime(),
        });
        break;
      default:
        setmensaje(
          `Seguro que el producto de codigo ${extract(
            String(data.CompraId)
          )} ya fue retirado?\n\n PORFAVOR ASEGURESE!!!`
        );
        setobject({
          ...obj,
          Estado: "Retirado", // Update the value of Estado field
          Retiro: new Date().getTime(),
        });
        break;
    }

    console.log("otro mas", object);
  };
  const handleCompra = (valor) => {
    setOpen(true);

    carddata.forEach((producto) => {
      handleObjecto(producto, valor);
      // const id = producto.id;
      // const vendedor = data.Comprador;
      // fetchData(vendedor, id);
    });
  };
  useEffect(() => {
    let da = [];
    const fetchData = () => {
      setLoading(true); // Set loading state to true when fetching data

      const databaseRef = ref(database, `GE/Compras/${contexto}/${codigo}`);
      onValue(databaseRef, (snapshot) => {
        setData(snapshot.val());
        const productosArray = Object.values(snapshot.val().Productos);

        setUserData(productosArray);
        setLoading(false); // Set loading state to true when fetching data
      });
    };

    fetchData();

    // Cleanup function to unsubscribe when component unmounts
    return () => {
      // Unsubscribe from database
    };
  }, []); // Empty dependency array means this effect runs once after the component mounts

  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    if (!hasFetchedData && userData.length !== 0) {
      const fetchData = (vendedor, codigo) => {
        console.log(data.Estado, "entar");
        let valor =
          data.Estado === "Comprado" || data.Estado === "Verificando..."
            ? "Verificando"
            : data.Estado;
        const databaseRef = ref(
          database,
          `GE/Comprador/${vendedor}/MisCompras/${valor}/${codigo}`
        );
        get(databaseRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val(), "hold man");
              setcarddata((prevData) => [...prevData, snapshot.val()]);
              console.log(snapshot.val());
              setHasFetchedData(true);
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };

      userData.forEach((producto) => {
        const id = producto.id;
        const vendedor = data.Comprador;
        fetchData(vendedor, id);
      });

      // Update the state variable to indicate that data has been fetched
    }

    // Cleanup function to unsubscribe when component unmounts
    return () => {
      // Unsubscribe from database
    };
  }, [userData, hasFetchedData]);
  const [textToCopy, setTextToCopy] = useState(""); // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };
  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };
  return (
    <div>
      {!loading ? (
        <div style={{ paddingTop: "10px" }}>
          <Alert
            open={open}
            message={mensaje}
            onClose={handleClose}
            onConfirm={handleConfirm}
          />

          <Grid container>
            {!isMobile ? (
              // Horizontal layout for desktop
              <>
                <Grid item xs={6}>
                  <h2>{`INFORMACION COMPRA\n\nCodigo:${data.CompraId} `}</h2>

                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Nombre
                        </Typography>
                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Barrio
                        </Typography>
                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Contacto
                        </Typography>
                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Lugar de Retiro
                        </Typography>

                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Intervalo
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">{data.Nombre}</Typography>
                        <Typography variant="body1">
                          {data.Barrio === undefined
                            ? "Sin Especificar"
                            : data.Barrio}
                        </Typography>
                        <div style={{ display: "flex" }}>
                          <Typography variant="body1" marginRight={3}>
                            {data.Contacto}
                          </Typography>

                          <CopyToClipboard
                            text={data.Contacto}
                            onCopy={onCopyText}
                          >
                            <button>Copiar </button>
                          </CopyToClipboard>
                        </div>
                        <Typography variant="body1">
                          {data.RetiroLugar === undefined
                            ? "Sin Especificar"
                            : data.RetiroLugar}
                        </Typography>

                        <Typography variant="body1">
                          {data.Intervalo === undefined
                            ? "Sin Especificar"
                            : data.Intervalo}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  {data.Imagen !== null ? (
                    <div
                      style={{
                        display: "flex",
                        marginTop: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ width: "50%", height: "50%" }}>
                        <img
                          src={data?.Imagen}
                          alt="Image"
                          style={{
                            width: "100%",
                            height: "50%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                  ) : null}
                  {data.Contexto === "Exterior" ? (
                    data.Estado === "Verificando..." ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "10px",
                          marginTop: "10px",
                        }}
                      >
                        <Button
                          onClick={() => handleCompra("Comprado")}
                          variant="contained"
                          color="primary"
                          style={{ borderRadius: "20px", marginRight: "14px" }}
                        >
                          Comprado
                        </Button>
                        <Button
                          onClick={() => handleCompra("Error")}
                          variant="contained"
                          color="error"
                          style={{ borderRadius: "10px", marginRight: "14px" }}
                        >
                          Error
                        </Button>
                      </div>
                    ) : data.Estado === "Comprado" ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "10px",
                          marginTop: "10px",
                        }}
                      >
                        <Button
                          onClick={() => handleCompra("Enviado")}
                          variant="contained"
                          color="primary"
                          style={{ borderRadius: "20px", marginRight: "14px" }}
                        >
                          Enviado
                        </Button>
                      </div>
                    ) : data.Estado === "Enviado" ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "10px",
                          marginTop: "10px",
                        }}
                      >
                        <Button
                          onClick={() => handleCompra("Retirado")}
                          variant="contained"
                          color="primary"
                          style={{ borderRadius: "20px", marginRight: "14px" }}
                        >
                          Retirado
                        </Button>
                      </div>
                    ) : null
                  ) : null}
                </Grid>
                {enviado === "" ? (
                  <Grid item xs={6}>
                    <h2>{`${carddata.length} PRODUCTOS COMPRADOS `}</h2>

                    <Box
                      sx={{
                        p: 2,

                        flexDirection: "row",
                      }}
                    >
                      <ProductosCard
                        data={carddata}
                        enviado={receiveForChild}
                      />
                    </Box>
                  </Grid>
                ) : null}
              </>
            ) : (
              // Vertical layout for mobile
              <div>
                <Cabezal texto={"Detalles"} />

                <Box
                  sx={{
                    display: "flex",
                    paddingTop: 5,
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={10}>
                    <h2>{`INFORMACION COMPRA \n\nCodigo:${data.CompraId} `}</h2>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Nombre
                        </Typography>
                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Barrio
                        </Typography>
                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Contacto
                        </Typography>
                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Lugar de Retiro
                        </Typography>

                        <Typography variant="body1" sx={{ color: "gray" }}>
                          Intervalo
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">{data.Nombre}</Typography>
                        <Typography variant="body1">
                          {data.Barrio === undefined
                            ? "Sin Especificar"
                            : data.Barrio}
                        </Typography>
                        <Typography variant="body1">{data.Contacto}</Typography>
                        <Typography variant="body1">
                          {data.RetiroLugar === undefined
                            ? "Sin Especificar"
                            : data.RetiroLugar}
                        </Typography>

                        <Typography variant="body1">
                          {data.Intervalo === undefined
                            ? "Sin Especificar"
                            : data.Intervalo}
                        </Typography>
                      </Grid>
                    </Grid>
                    <ProductosCard data={carddata} enviado={receiveForChild} />
                  </Grid>
                </Box>
              </div>
            )}
          </Grid>

          {isMobile ? (
            <div>
              {data.Imagen !== null ? (
                <div
                  style={{
                    display: "flex",
                    marginTop: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "50%", height: "50%" }}>
                    <img
                      src={data.Imagen}
                      alt="Image"
                      style={{
                        width: "100%",
                        height: "50%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              ) : null}

              {data.Contexto === "Exterior" ? (
                data.Estado === "Verificando..." ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      onClick={() => handleCompra("Comprado")}
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: "20px", marginRight: "14px" }}
                    >
                      Comprado
                    </Button>
                    <Button
                      onClick={() => handleCompra("Error")}
                      variant="contained"
                      color="error"
                      style={{ borderRadius: "10px", marginRight: "14px" }}
                    >
                      Error
                    </Button>
                  </div>
                ) : data.Estado === "Comprado" ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      onClick={() => handleCompra("Enviado")}
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: "20px", marginRight: "14px" }}
                    >
                      Enviado
                    </Button>
                  </div>
                ) : data.Estado === "Enviado" ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      onClick={() => handleCompra("Retirado")}
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: "20px", marginRight: "14px" }}
                    >
                      Retirado
                    </Button>
                  </div>
                ) : null
              ) : null}
            </div>
          ) : null}
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </div>
      )}
      {data.Contexto === "Nacional" && (
        <button onClick={sendWhatsAppMessage}>CONFIRMAR COMPRA </button>
      )}
      <button onClick={sendWhatsAppMessage}>
        PRE-DELIVERY NOTIFICATION // MENSAJE DIRECTO{" "}
      </button>
    </div>
  );
};

export default DetallesCompra;
