import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { article, authors, chartData, newArticlesData } from "./data";
import PopularArticles from "components/dashboard/news/PopularArticals";
import ReportBox from "components/ReportBox/index";
import ContainerHeader from "components/ContainerHeader/index";
import CardHeader from "components/dashboard/Common/CardHeader/index";
import UserDetailTable from "components/dashboard/Common/UserDetailTable";
import IntlMessages from "util/IntlMessages";
import CustomLineChart from "components/CustomLineChart/index";

const Dashboard = (props) => {
  return (
    <div className="app-wrapper">
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader
          match={props.match}
          title={<IntlMessages id="sidebar.dashboard.news" />}
        />

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

        <div className="row">
          <div className="col-lg-5">
            <div className="jr-card jr-full-card">
              <CardHeader
                heading={<IntlMessages id="dashboard.popularAuthors" />}
                subHeading={<IntlMessages id="dashboard.authorsWith" />}
              />

              <div className="jr-card-body">
                <UserDetailTable data={authors} />
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="jr-card pb-2">
              <CardHeader
                heading={<IntlMessages id="dashboard.popularArticles" />}
                subHeading={<IntlMessages id="dashboard.loremIpsum" />}
                styleName="mb-4"
              />

              <div className="jr-card-body">
                <div className="row">
                  {article.map((article, index) => (
                    <PopularArticles key={index} article={article} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
