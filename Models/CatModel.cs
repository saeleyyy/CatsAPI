using System;
using Newtonsoft.Json;

namespace CatAPI.Models
{
	public class CatModel
	{
		[JsonIgnore]
		public string[] breeds { get; set; }
		
		public string id { get; set; }

		public string url { get; set; }

		public int? width { get; set; }

		public int? height { get; set; }	
	}
}

