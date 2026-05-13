import Layout
from "../../components/common/Layout/Layout";
import ProjectTable
from "../../components/dashboard/ProjectTable/ProjectTable";
import ProjectStatusChart
from "../../components/analytics/ProjectStatusChart/ProjectStatusChart";
import RecentActivities
from "../../components/dashboard/RecentActivities/RecentActivities";
import FundingChart 
from "../../components/analytics/FundingChart/FundingChart";
import LiveMap 
from "../../components/tracking/LiveMap/LiveMap";
import AIAlerts from "../../components/analytics/AIAlerts/AIAlerts";

import StatsCard
from "../../components/dashboard/StatsCard/StatsCard";

import "./Dashboard.css";

function Dashboard() {

  return (

    <Layout>

      <div className="dashboard">

        <h1>
          Infrastructure Dashboard
        </h1>


        <div className="stats-container">

          <StatsCard
            title="Total Projects"
            value="120"
          />

          <StatsCard
            title="Active Projects"
            value="86"
          />

          <StatsCard
            title="Completed Projects"
            value="34"
          />

          <StatsCard
            title="Delayed Projects"
            value="12"
          />

        </div>
         <ProjectTable />
         <ProjectStatusChart />
         <RecentActivities />
         <FundingChart />
         <LiveMap />
         <AIAlerts />

      </div>

    </Layout>
  );
}

export default Dashboard;