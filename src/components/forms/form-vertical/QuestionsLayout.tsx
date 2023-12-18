import {
  Grid,
  InputAdornment,
  Button,
  Typography,
  Select,
  OutlinedInput,
  Stack,
  Chip,
} from "@mui/material";
import CustomFormLabel from "../theme-elements/CustomFormLabel";
import CustomTextField from "../theme-elements/CustomTextField";
import CustomOutlinedInput from "../theme-elements/CustomOutlinedInput";
import { IconPlus, IconTrash, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { clientTableData, IClientTable } from "../../tables/tableData";
import CustomSelect from "../theme-elements/CustomSelect";
import { MenuItem } from "@mui/material";

interface Question {
  id: number;
  content: string;
}

const QuestionsLayout = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedClients, setSelectedClients] = useState([]);

  function addQuestion() {
    const newQuestion: Question = {
      id: questions.length + 1,
      content: "",
    };

    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  }

  function removeQuestion(id: number, key: number) {
    setQuestions(
      questions.filter((value, index) => key !== index || value.id !== id)
    );
  }
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="start"
          flexDirection="column"
        >
          <Typography variant="caption" color="error">
            1 - Selecione o contato do seu cliente
          </Typography>
          <CustomFormLabel htmlFor="bl-email" sx={{ mt: 0 }}>
            Clientes
          </CustomFormLabel>
          <Select
            labelId="bl-email"
            value={selectedClients}
            onChange={(e: any) => setSelectedClients(e.target.value)}
            fullWidth
            variant="outlined"
            multiple={true}
            input={<OutlinedInput label="Selecione um ou mais e-mails" />}
            renderValue={(selected) => (
              <Stack gap={1} direction="row" flexWrap="wrap">
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={() =>
                      setSelectedClients(
                        selectedClients.filter((item) => item !== value)
                      )
                    }
                    deleteIcon={
                      <IconX onMouseDown={(event) => event.stopPropagation()} />
                    }
                  />
                ))}
              </Stack>
            )}
          >
            {clientTableData.map((client) => (
              <MenuItem
                key={client.id}
                value={client.email}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {client.name}
                </Typography>
                {client.email}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        {/* <Grid item xs={12}>
          <CustomTextField
            id="bl-email"
            placeholder="Selecione um ou mais e-mails"
            fullWidth
          />
        </Grid> */}
        {/* 2 */}
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="start"
          flexDirection="column"
          mt={1}
        >
          <Typography variant="caption" color="error">
            2 - Insira o texto no campo da Mensagem convidando o seu cliente a
            responder a pesquisa
          </Typography>
          <CustomFormLabel htmlFor="bl-company" sx={{ mt: 0 }}>
            Mensagem
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            id="bl-company"
            placeholder="Sugestão: para aprimorar a qualidade dos nossos serviços, gostaríamos de saber como foi a sua experiência conosco."
            fullWidth
            multiline
          />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="start"
          flexDirection="column"
          mt={1}
          mb={1}
        >
          <Typography variant="caption" color="error">
            3 - Preencha o campo da pergunta principal
          </Typography>
          <CustomFormLabel htmlFor="bl-company" sx={{ mt: 0 }}>
            Pergunta principal
          </CustomFormLabel>
          <Typography variant="body1">
            A pergunta principal do NPS tem o intuito de avaliar o grau de
            satisfação do seu cliente, de maneira geral ou pontual.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            id="bl-company"
            placeholder="Sugestão: “De 0 a 10, quanto você recomendaria a nossa empresa para um amigo ou familiar?”"
            fullWidth
            multiline
          />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="start"
          flexDirection="column"
          mt={1}
          mb={1}
        >
          <Typography variant="caption" color="error">
            4 - Por último, preencha os campos das questões
          </Typography>
          <CustomFormLabel htmlFor="bl-company" sx={{ mt: 0 }}>
            Questões
          </CustomFormLabel>
          <Typography variant="body1" mb={1}>
            As questões são avaliações mais específicas e têm como finalidade
            receber um feedback sobre os seus processos e serviços para que
            assim você possa aprimorá-los. Você pode adicionar quantas questões
            desejar e o seu cliente avaliará com a métrica do Like e Dislike
            (Gostei/Não Gostei).
          </Typography>
          <Button variant="contained" onClick={() => addQuestion()}>
            <IconPlus />
            Adicionar
          </Button>
        </Grid>
        <Grid item xs={12} display="flex" flexDirection="column" gap={2}>
          {questions.map((question, key) => (
            <Grid item display="flex" gap={2} key={question.id}>
              <CustomTextField
                id="bl-company"
                placeholder="Sugestão: “Qualidade do atendimento”, “Cumprimento de prazos”, “Qualidade do produto”, “Relatórios”, “Suporte ao cliente”"
                fullWidth
              />
              <Button
                variant="outlined"
                onClick={() => removeQuestion(question.id, key)}
              >
                <IconTrash />
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionsLayout;
