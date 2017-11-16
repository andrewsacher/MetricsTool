using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace angular4Template.Controllers
{
    public class DataScrappingController : Controller
    {

    [HttpGet]
    public IActionResult WhoAmI()
    {
        return Json("Scrapping Controller");
    }

    [HttpGet]
    public IActionResult DataScrapping()
    {
        try
        {
             List<ScrappingMetric> list = new List<ScrappingMetric>();
                var scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Transportation and warehousing",
                    Id = "c59d5f33 - c290 - 4235 - 842d - 338624dcb4fe"
                };
                
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Transportation and warehousing",
                    Id = "8e371cd9 - f1f6 - 4cce - 95da - db2b76277755"
                };
                
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Utilities",
                    Id = "a4e1781e - 7598 - 4e17 - 9048 - e15283262138"
                };
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Utilities",
                    Id = "0617d92d - 2a79 - 4507 - b337 - 44104134b2f7"
                };
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Information",
                    Id = "00d17e85 - 4fe5 - 47e2 - a2fd - b77cc62f48c8"
                };
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Information",
                    Id = "9ea1d2d9 - 374a - 4c24 - bd61 - 6ab8052ba610"
                };
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Financial activities",
                    Id = "fdc1100d - 52ea - 4842 - 91da - d82a028e8aab"
                };
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Financial activities",
                    Id = "c7ef67fa - 470b - 4f0f - ba74 - d165c51143c5"
                };
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Finance and insurance",
                    Id = "47b466c0 - 98e5 - 4b86 - 9eee - 0bc8f06984ab"
                };
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Finance and insurance",
                    Id = "a0c5903e-5987-470d-80cf-0ad24f4df586"
                };
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj)Employed - Wage and salary workers, Real estate and rental and leasing",
                    Id = "d4437401-b211-427e-a246-0e3ab5225ccb"
                };
                list.Add(scrap);
                scrap = new ScrappingMetric()
                {
                    Name = "(unadj) Employed - Wage and salary workers, Real estate and rental and leasing",
                    Id = "caf44362-57d9-47c5-92ee-fe3ba7d95bda"
                };
                list.Add(scrap);
            return Json(list);
        }
        catch (Exception ex)
        {
            return null;
        }
    }

        public class ScrappingMetric
        {
            public string Name { get; set; }
            public string Id { get; set; }

        }
    }
}
