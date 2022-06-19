using System.Net.Http.Headers;
using CatAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CatAPI.Controllers
{
    public class HomeController : Controller
    {
        HttpClient client = new HttpClient();
        
        public async Task<IActionResult> Index()
        {
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            
            HttpResponseMessage response = await client.GetAsync("https://api.thecatapi.com/v1/images/search?limit=2");

            if (response.IsSuccessStatusCode)
            {
                string res = await response.Content.ReadAsStringAsync();
                List<CatModel> cat = JsonConvert.DeserializeObject<List<CatModel>>(res);
                ViewBag.Images = cat;
            }
            
            return View();
        }
        
        [HttpGet]
        public Task<string> GetImage()
        {
            return GetRandomImageUrl();
        }

        private async Task<string> GetRandomImageUrl()
        {
            HttpResponseMessage response = await client.GetAsync("https://api.thecatapi.com/v1/images/search?limit=1");
            string res = await response.Content.ReadAsStringAsync();

            return res;
        }
    }
}
