import { useEffect, useState } from "react";
import { pageService } from "../page.service";
import { HomePageDataResponse } from "./home-page-data-response.type";

export function useHomePageService() {
  const [homePageData, setHomePageData] = useState<HomePageDataResponse>();

  async function getHomePageData() {
    const response = await pageService.getHomePageData();
    setHomePageData(response);
  }

  useEffect(() => {
    getHomePageData();
  }, []);

  return [homePageData];
}
