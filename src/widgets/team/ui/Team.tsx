
import './Team.css'
import { TitleBlock} from "@/shared/ui"
import {TeamMembers} from "./TeamMembers";

export const Team = () => {
  return (
    <div className="elementor-element elementor-element-33cf04f e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <TitleBlock title="Team" specification="The People Powering Our Digital Solutions" align="center"/>
        <div className="elementor-element elementor-element-ed23bdf e-grid e-con-full e-con e-child" >
          <TeamMembers />

        </div>
      </div>
    </div>
  );
};
