using Microsoft.EntityFrameworkCore;
using QaSlackWeb.Models;

namespace QaSlackWeb.Data
{
    public class CosmosDatabaseContext: DbContext
    {
        public CosmosDatabaseContext (DbContextOptions<CosmosDatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<SlackMessage> SlackMessage { get; set; }
        
    }
}