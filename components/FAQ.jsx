import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from  "../styles/Faq.module.css";
import Form from "./Form";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.faqContainer}>
        <p1> SERVICE</p1>
        <h3>FAQS: SERVICES</h3>
        <div className={styles.faqList}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <h6>KPFC Frequent</h6>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>Can I get Waste Pipes from KPFC?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{backgroundColor: 'orange', padding: '15px'}}>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Frequesntly asked Questions
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                How Many Branches does KPFC have?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{backgroundColor: 'orange', padding: '15px'}}>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                How do I invest with KPFC?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                How do I transport my goods from KPFC?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{backgroundColor: 'orange', padding: '15px'}}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
               Ask our Engineers to help you
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{backgroundColor: 'orange', padding: '15px'}}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={styles.faqListMobile}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <h6>KPFC Frequent</h6>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>Can I get Waste Pipes from KPFC?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{backgroundColor: 'orange', fontSize:"8px", padding: '5px'}}>
                <p>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Frequesntly asked Questions
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                How Many Branches does KPFC have?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{backgroundColor: 'orange', padding: '15px'}}>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                How do I invest with KPFC?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                How do I transport my goods from KPFC?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{backgroundColor: 'orange', padding: '15px'}}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
               Ask our Engineers to help you
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{backgroundColor: 'orange', padding: '15px'}}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className={styles.quoteForm}>
        <Form />
      </div>
    </div>
  );
};

export default FAQ;
