import React from "react";
import { useMediaQuery } from "react-responsive";

import GenericContent from "components/content/GenericContent";
import CenteredContentWithGrid from "components/content/CenteredContentWithGrid";
import StaffCard from "components/card/StaffCard";
import MobileStaffCard from "components/card/MobileStaffCard";

import {
  getGCCStaff,
  getUniversityCityStaff,
  getMainLineStaff,
  massageStaff,
} from "modules/Contentful";

import { MOBILE_QUERY } from "constants/mobile";

import staffURL from "static/images/staff/staff_background.jpg";

const Staff = () => {
  const mobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <React.Fragment>
      <GenericContent cards title="Staff" imageURL={staffURL}>
        <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={"Grace Covenant Church"}
          fetchCall={[getGCCStaff]}
          massage={massageStaff}
          component={mobile ? MobileStaffCard : StaffCard}
        ></CenteredContentWithGrid>
        <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={"University City"}
          fetchCall={[getUniversityCityStaff]}
          massage={massageStaff}
          component={mobile ? MobileStaffCard : StaffCard}
        ></CenteredContentWithGrid>
        <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={"Main Line"}
          fetchCall={[getMainLineStaff]}
          massage={massageStaff}
          component={mobile ? MobileStaffCard : StaffCard}
        ></CenteredContentWithGrid>
      </GenericContent>
    </React.Fragment>
  );
};

export default Staff;
