using System.Collections;
using Microsoft.EntityFrameworkCore;
using QaSlackWeb.Data;
using QaSlackWeb.Models;

namespace QaSlackWeb.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class DashboardCosmosController
    {
        private readonly ILogger<DashboardCosmosController> _logger;
        private readonly CosmosDatabaseContext _cosmosDatabaseContext;

        public DashboardCosmosController(ILogger<DashboardCosmosController> logger, CosmosDatabaseContext cosmosDatabaseContext)
        {
            _logger = logger;
            _cosmosDatabaseContext = cosmosDatabaseContext;
        }

        [HttpGet]
        public IEnumerable<SlackMessage> Get()
        {
            _cosmosDatabaseContext.SlackMessage.Load();
            return _cosmosDatabaseContext.SlackMessage.Local.ToList();
        }
    }
}