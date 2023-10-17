import * as React from "react";
import { useState } from "react";
import { addCustomer } from "../../store/customers/CustomersSlice";
import { mask } from 'remask';

import {
  Button,
  Dialog,
  Fab,
  DialogContent,
  TextField,
  DialogActions,
  DialogContentText,
  Typography,
  Grid
} from "@mui/material";
import { useSelector, useDispatch } from "../../store/Store";
import { IconTrashFilled } from "@tabler/icons-react";

interface Props {
  colors?: any[];
}

interface Responsible {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

const initialResponsible = {
  name: "",
  email: "",
  phone: "",
};

const AddCustomer = ({ colors }: Props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [scolor, setScolor] = useState<string>("primary");
  const id = useSelector((state) => state.notesReducer.notes.length + 1);
  const [showImport, setShowImport] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState("");
  const [observation, setObservation] = useState("");
  const [responsibles, setResponsibles] = useState<Array<Responsible>>([
    initialResponsible,
  ]);
  const [removedResponsibles, setRemovedResponsibles] = useState<Array<number>>(
    []
  );

  const setColor = (e: string) => {
    setScolor(e);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function addResponsible() {
    setResponsibles([...responsibles, { name: "", email: "", phone: "" }]);
  }

  function removeResponsible(id: number, key: number) {
    if (id) {
      setRemovedResponsibles([...removedResponsibles, id]);
    }
    setResponsibles(
      responsibles.filter(
        (value: Responsible, index: number) => key !== index || value.id !== id
      )
    );
  }

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        color="primary"
        onClick={handleClickOpen}
      >
        Adicionar Cliente
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogContent>
          <Grid 
          container
          direction="row"
          alignItems="center"
          spacing={2}
          >
            <Grid item>
              <Typography variant="h5" fontWeight={700}>
                Cliente
              </Typography>
            </Grid>
            <Grid item>
              <Button
              variant="outlined"
              size="small"
              onClick={() => setShowImport(!showImport)}
              >
                {
                  showImport
                  ?
                  'Adicionar cliente'
                  :
                  'Importar lista'
                }
              </Button>
            </Grid>
          </Grid>
          {
            !showImport
            ?
            <Grid container spacing={3} mb={3} mt={1}>
              <Grid item sm={12} xs={12}>
                <TextField
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  margin="none"
                  id="companyName"
                  label="Nome da empresa"
                  type="text"
                  size="small"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              {responsibles.map((responsible, key) => (
                <Grid item container spacing={2}>
                  <Grid item lg={4} md={12} sm={12} xs={12}>
                    <TextField
                      value={responsibles[key].name}
                      onChange={(e) => {
                        const newResponsible = responsibles.map(
                          (responsible, index) => {
                            if (index === key) {
                              return {
                                name: e.target.value,
                                email: responsibles[key].email,
                                phone: responsibles[key].phone,
                              };
                            } else {
                              return responsible;
                            }
                          }
                        );
                        setResponsibles(newResponsible);
                      }}
                      margin="none"
                      id="responsible_name"
                      label="Nome do responsável"
                      type="text"
                      size="small"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={4} md={12} sm={12} xs={12}>
                    <TextField
                      value={responsibles[key].email}
                      onChange={(e) => {
                        const newResponsible = responsibles.map(
                          (responsible, index) => {
                            if (index === key) {
                              return {
                                name: responsibles[key].name,
                                email: e.target.value,
                                phone: responsibles[key].phone,
                              };
                            } else {
                              return responsible;
                            }
                          }
                        );
                        setResponsibles(newResponsible);
                      }}
                      margin="none"
                      id="email"
                      label="E-mail"
                      type="text"
                      size="small"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={3} md={12} sm={12} xs={12}>
                    <TextField
                      value={mask(responsibles[key].phone, '(99) 99999-9999')}
                      onChange={(e) => {
                        const newResponsible = responsibles.map(
                          (responsible, index) => {
                            if (index === key) {
                              return {
                                name: responsibles[key].name,
                                email: responsibles[key].email,
                                phone: e.target.value,
                              };
                            } else {
                              return responsible;
                            }
                          }
                        );
                        setResponsibles(newResponsible);
                      }}
                      margin="none"
                      id="phone"
                      label="Telefone"
                      type="text"
                      size="small"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={1} md={12} sm={12} xs={12}>
                    <Button
                      onClick={() => removeResponsible(responsible.id!, key)}
                    >
                      <IconTrashFilled />
                    </Button>
                  </Grid>
                  {/* <button
                          className="custom-btn d-flex align-items-center justify-content-center align-self-start ml-2"
                          type="button"
                          onClick={() => removeResponsible(responsible.id!, key)}
                        >
                          <span className="material-icons delete-data">delete</span>
                        </button> */}
                </Grid>
              ))}
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={addResponsible}
                >
                  Novo responsável
                </Button>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                  margin="normal"
                  id="observation"
                  label="Observação"
                  type="text"
                  size="small"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            :
            <Grid container spacing={3} mb={3} mt={1}>
              <Grid item sm={12}>
                <TextField
                  // onChange={(e) => {
                  //   const newResponsible = responsibles.map(
                  //     (responsible, index) => {
                  //       if (index === key) {
                  //         return {
                  //           name: e.target.value,
                  //           email: responsibles[key].email,
                  //           phone: responsibles[key].phone,
                  //         };
                  //       } else {
                  //         return responsible;
                  //       }
                  //     }
                  //   );
                  //   setResponsibles(newResponsible);
                  // }}
                  margin="normal"
                  id="responsible_name"
                  type="file"
                  size="small"
                  variant="outlined"
                  fullWidth
                />
                <Typography>Utilize <a className="font-weight-bold" href="https://administrativo.cxsolution.com.br/arquivos/lista-clientes.xlsx" target="_blank">este modelo</a> de arquivo para importação dos usuários</Typography>
              </Grid>
            </Grid>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            disabled={companyName === ""}
            onClick={(e) => {
              e.preventDefault();
              dispatch(addCustomer(id, companyName, scolor));
              setOpen(false);
              setCompanyName("");
            }}
            variant="contained"
          >
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddCustomer;
