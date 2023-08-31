import { Link } from "react-router-dom";
import Arch from "../components/branches/Arch";
import BioMed from "../components/branches/BioMed";
import CsItMca from "../components/branches/CsItMca";
import Civil from "../components/branches/Civil";
import Biotech from "../components/branches/Biotech";
import Mechanical from "../components/branches/Mechanical";
import Mining from "../components/branches/Mining";
import Meta from "../components/branches/Meta";
import EE from "../components/branches/EE";
import ECE from "../components/branches/ECE";
import Chem from "../components/branches/Chem";
import { useState } from "react";
import PageBanner from "../layout/PageBanner";

const ProblemStatements = () => {
  const [selectedBranch, setSelectedBranch] = useState('Arch');

  const renderSelectedBranch = () => {
    switch (selectedBranch) {
      case 'Arch':
        return <Arch />;
      case 'BioMed':
        return <BioMed />;
      case 'Biotech':
        return <Biotech />;
      case 'Chem':
        return <Chem />;
      case 'Civil':
        return <Civil />;
      case 'CsItMca':
        return <CsItMca />;
      case 'ECE':
        return <ECE />;
      case 'EE':
        return <EE />;
      case 'Mechanical':
        return <Mechanical />;
      case 'Meta':
        return <Meta />;
      case 'Mining':
        return <Mining />;
      default:
        return <Arch />;
    }
  };
  const isActive = (branch) => selectedBranch === branch;
  return (
    <div className="metaportal_fn_blog_single">
        <PageBanner pageName={"statements"} prePageLink={"/vigyaan"} prePageName={"vigyaan"}/>
      <div className="container small">
        <div className="metaportal_fn_wsidebar">
        {renderSelectedBranch()}
          {/* !Left Sidebar */}
          {/* Right Sidebar */}
          <div className="sidebar_right">
            {/* Widget (Custom Categories) */}
            <div className="widget widget-custom-categories">
              <div className="wid-title">
                <span className="text">Categories</span>
                <span className="icon" />
              </div>
              <div
                className="metaportal_fn_categories"
                data-more="Show More"
                data-less="Show Less"
                data-count={4}
              >
                <ul>
                  <li>
                    <a onClick={() => setSelectedBranch('Arch')} className={isActive('Arch') ? 'activa' : ''}>
                      <span>Architecture</span>
                    </a>
                    <span className="count">8</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('BioMed')} className={isActive('BioMed') ? 'activa' : ''}>
                      <span>Biomedical</span>
                    </a>
                    <span className="count">8</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('Biotech')} className={isActive('Biotech') ? 'activa' : ''}>
                      <span>Biotechnology</span>
                    </a>
                    <span className="count">12</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('Civil')} className={isActive('Civil') ? 'activa' : ''}>
                      <span>Civil</span>
                    </a>
                    <span className="count">14</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('CsItMca')} className={isActive('CsItMca') ? 'activa' : ''}>
                      <span>CSE / IT / MCA</span>
                    </a>
                    <span className="count">11</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('ECE')} className={isActive('ECE') ? 'activa' : ''}>
                      <span>Electronics & Communications</span>
                    </a>
                    <span className="count">11</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('EE')} className={isActive('EE') ? 'activa' : ''}>
                      <span>Electrical</span>
                    </a>
                    <span className="count">10</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('Mechanical')} className={isActive('Mechanical') ? 'activa' : ''}>
                      <span>Mechanical</span>
                    </a>
                    <span className="count">8</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('Meta')} className={isActive('Meta') ? 'activa' : ''}>
                      <span>Metallurgy</span>
                    </a>
                    <span className="count">7</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('Mining')} className={isActive('Mining') ? 'activa' : ''}>
                      <span>Mining</span>
                    </a>
                    <span className="count">16</span>
                  </li>
                  <li>
                    <a onClick={() => setSelectedBranch('Chem')} className={isActive('Chem') ? 'activa' : ''}>
                      <span>Chemical</span>
                    </a>
                    <span className="count">9</span>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
            </div>
            {/* !Widget (Custom Categories) */}
          </div>
          {/* !Right Sidebar */}
        </div>
        {/* !Sidebar */}
      </div>
      <style jsx>
      </style>
    </div>
  );
};
export default ProblemStatements;
