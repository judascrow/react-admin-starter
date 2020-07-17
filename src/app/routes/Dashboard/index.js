import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { chartData, newArticlesData } from "./data";
import ReportBox from "components/ReportBox/index";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import CustomLineChart from "components/CustomLineChart/index";

import ReqformTable from "./ReqformTable";

const Dashboard = (props) => {
  return (
    <div className="app-wrapper">
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader match={props.match} title={"หน้าหลัก"} />

        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-primary text-white p-3"
              price="85K+"
              icon="email-open"
              detail={<IntlMessages id="dashboard.newSubscriber" />}
              subHeadingColor="text-white"
            >
              <ResponsiveContainer width="100%" height={100}>
                <BarChart
                  data={chartData}
                  maxBarSize={4}
                  margin={{ left: 0, right: 0, top: 10, bottom: 10 }}
                >
                  <Bar dataKey="amt" fill="white" />
                </BarChart>
              </ResponsiveContainer>
            </ReportBox>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-cyan text-white p-3"
              icon="file"
              price="526"
              detail={<IntlMessages id="dashboard.newArticles" />}
              subHeadingColor="text-white"
            >
              <CustomLineChart
                chartData={newArticlesData.chartData}
                labels={newArticlesData.labels}
                borderColor="#FFF"
                borderWidth={5}
                pointBackgroundColor="#FFF"
                pointBorderWidth={2}
                pointRadius={0}
                height={100}
                pointHoverBorderColor="#00BBD4"
                lineTension={0.4}
                gridLinesDisplay={true}
                gridLineWidth={3}
                shadowColor="rgba(0,0,0,0.6)"
              />
            </ReportBox>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-pink text-white p-3"
              icon="accounts-alt"
              price="232"
              detail={<IntlMessages id="dashboard.newAuthors" />}
              subHeadingColor="text-white"
            >
              <CustomLineChart
                chartData={newArticlesData.chartData}
                labels={newArticlesData.labels}
                borderColor="#FFF"
                borderWidth={3}
                pointBackgroundColor="#FFF"
                pointBorderWidth={2}
                pointRadius={0}
                height={100}
                pointHoverBorderColor="#F29100"
                lineTension={0}
                gridLinesDisplay={true}
                gridLineWidth={3}
                shadowColor="rgba(0,0,0,0.6)"
              />
            </ReportBox>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-orange text-white p-3"
              icon="arrow-split"
              price="756+"
              detail={<IntlMessages id="dashboard.avgDailyTraffic" />}
              subHeadingColor="text-white"
            >
              <CustomLineChart
                chartData={newArticlesData.chartData}
                labels={newArticlesData.labels}
                borderColor="#FFF"
                borderWidth={3}
                pointBackgroundColor="#FFF"
                pointBorderWidth={2}
                pointRadius={0}
                height={100}
                pointHoverBorderColor="#F29100"
                lineTension={0}
                gridLinesDisplay={true}
                gridLineWidth={3}
                shadowColor="rgba(0,0,0,0.6)"
              />
            </ReportBox>
          </div>
        </div>
        <div>
          <ReqformTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
