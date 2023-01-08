import { useEffect, useState } from "react";
import { pageService } from "../page.service";
import { MenuPageDataResponse } from "./menu-page-data-response.type";

export function useMenuPageService() {
  const [menuPageData, setMenuPageData] = useState<MenuPageDataResponse>();

  async function getMenuPageData() {
    const response = await pageService.getMenuPageData();
    setMenuPageData(response);
  }

  useEffect(() => {
    getMenuPageData();
  }, []);

  return [menuPageData];
}
