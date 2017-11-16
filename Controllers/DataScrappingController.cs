using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace angular4Template.Controllers
{
    [Route("api/[controller]")]
    public class DataScrappingController : ApiController
    {

        [HttpGet]
        public IHttpActionResult DataScrapping()
        {
            try
            {
                IHttpActionResult response;
                String json = "[{\"Name\":\"(unadj) Employed - Wage and salary workers, Transportation and warehousing\",\"Id\":\"c59d5f33 - c290 - 4235 - 842d - 338624dcb4fe\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Transportation and warehousing\",\"Id\":\"8e371cd9 - f1f6 - 4cce - 95da - db2b76277755\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Utilities\",\"Id\":\"a4e1781e - 7598 - 4e17 - 9048 - e15283262138\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Utilities\",\"Id\":\"0617d92d - 2a79 - 4507 - b337 - 44104134b2f7\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Information\",\"Id\":\"00d17e85 - 4fe5 - 47e2 - a2fd - b77cc62f48c8\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Information\",\"Id\":\"9ea1d2d9 - 374a - 4c24 - bd61 - 6ab8052ba610\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Financial activities\",\"Id\":\"fdc1100d - 52ea - 4842 - 91da - d82a028e8aab\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Financial activities\",\"Id\":\"c7ef67fa - 470b - 4f0f - ba74 - d165c51143c5\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Finance and insurance\",\"Id\":\"47b466c0 - 98e5 - 4b86 - 9eee - 0bc8f06984ab\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Finance and insurance\",\"Id\":\"a0c5903e - 5987 - 470d - 80cf - 0ad24f4df586\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Real estate and rental and leasing\",\"Id\":\"d4437401 - b211 - 427e-a246 - 0e3ab5225ccb\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Real estate and rental and leasing\",\"Id\":\"caf44362 - 57d9 - 47c5 - 92ee - fe3ba7d95bda\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Professional and business services\",\"Id\":\"ef82619a - 2458 - 498b - 9819 - b434246cd0e7\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Professional and business services\",\"Id\":\"7ee10cd0 - 5483 - 49f7 - adc3 - b073e6c44b4d\"},{\"Name\":\"(unadj) Employed - Wage and salary workers, Professional and technical services\",\"Id\":\"d2478522 - 6194 - 44f0 - afa9 - 27bd8b600330\"}";
            var responseMsg = this.Request.CreateResponse(HttpStatusCode.OK);
                responseMsg.Content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                response = ResponseMessage(responseMsg);
                return response;
            }
            catch(Exception ex)
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
