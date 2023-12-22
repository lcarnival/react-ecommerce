import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {Container, Row, Col} from "react-bootstrap";


const shopping =
    {
      id: "",
      total: 0,
      created_date: "",
      items: []
    }


export const MyShopping = () => {
  return (
      <Container>

        <Row>

          <Col>

          </Col>

          <Col xs={8} style={{ display: 'flex', justifyContent: 'center' }}>

            <List sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary="5 agendas"
                    secondary={
                      <React.Fragment>
                        <Typography
                            sx={{display: "inline"}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                          Secundaria
                        </Typography>

                      </React.Fragment>
                    }
                />
              </ListItem>
              <Divider variant="inset" component="li"/>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary="1 agenda"
                    secondary={
                      <React.Fragment>
                        <Typography
                            sx={{display: "inline"}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                          Primaria
                        </Typography>
                        {"id"}
                        {"fecha de compra"}
                        {"total"}
                      </React.Fragment>
                    }
                />
              </ListItem>
              <Divider variant="inset" component="li"/>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary="2 Agendas"
                    secondary={
                      <React.Fragment>
                        <Typography
                            sx={{display: "inline"}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                          Inicia
                        </Typography>
                        {"id"}
                        {"fecha de compra"}
                        {"total"}
                      </React.Fragment>
                    }
                />
              </ListItem>
            </List>
          </Col>



          <Col>

          </Col>

        </Row>
      </Container>
  );
};
