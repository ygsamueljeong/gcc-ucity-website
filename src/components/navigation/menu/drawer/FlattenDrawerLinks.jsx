import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import makeStyles from '@mui/styles/makeStyles';
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import Link from "components/link/Link";

const useStyles = makeStyles((theme) => ({
  menuText: {
    textAlign: "center",
  },
  menuSubtitle: {
    fontWeight: 700,
    textAlign: "center",
    fontSize: "large",
  },
  title: {
    flexGrow: 1,
  },
  logo: {},
}));

const FlattenDrawerLinks = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {props.data.map((element, index) => {
        if (typeof element.children === "object") {
          return (
            <div key={index}>
              <Divider />
              <ListSubheader
                className={clsx(classes.menuSubtitle, classes.menuText)}
                disableSticky
              >
                {element.title}
              </ListSubheader>
              <Divider />
              <FlattenDrawerLinks
                data={element.children}
                toggleDrawer={(flags) => props.toggleDrawer(false)}
              />
              <Divider />
            </div>
          );
        } else {
          return (
            <div
              className={clsx(classes.list, [classes.fullList])}
              role="presentation"
              onClick={props.toggleDrawer(false)}
              onKeyDown={props.toggleDrawer(false)}
              key={index}
            >
              <ListItem button component={Link} to={element.children}>
                <ListItemText
                  className={classes.menuText}
                  primary={element.title}
                />
              </ListItem>
            </div>
          );
        }
      })}
    </React.Fragment>
  );
};

FlattenDrawerLinks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      children: PropTypes.any,
    })
  ),
  toggleDrawer: PropTypes.func.isRequired,
};
export default FlattenDrawerLinks;
