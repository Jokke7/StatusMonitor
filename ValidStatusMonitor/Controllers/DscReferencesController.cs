using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ValidStatusMonitor.DataModel;
using ValidStatusMonitor.Models;

namespace ValidStatusMonitor.Controllers
{
    //[Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class DscReferencesController : ControllerBase
    {
        private readonly ValidStatusMonitorContext _context;

        public DscReferencesController(ValidStatusMonitorContext context)
        {
            _context = context;
        }

        // GET: api/Dsc/All
        [HttpGet]
        [Route("api/Dsc/All")]
        public IEnumerable<DscReference> GetDscreference()
        {
            return _context.Dscreference;
        }

        // GET: api/Dsc/1
        [HttpGet]
        [Route("api/Dsc/{id}")]
        public async Task<IActionResult> GetDscReference([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dscReference = await _context.Dscreference.FindAsync(id);

            if (dscReference == null)
            {
                return NotFound();
            }

            return Ok(dscReference);
        }

        // PUT: api/Dsc/2
        [HttpPut]
        [Route("api/Dsc/{id}")]
        public async Task<IActionResult> PutDscReference([FromRoute] int id, [FromBody] DscReference dscReference)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != dscReference.Id)
            {
                return BadRequest();
            }

            _context.Entry(dscReference).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DscReferenceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Dsc
        [HttpPost]
        [Route("api/Dsc")]
        public async Task<IActionResult> PostDscReference([FromBody] DscReference dscReference)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Dscreference.Add(dscReference);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDscReference", new { id = dscReference.Id }, dscReference);
        }

        // DELETE: api/Dsc/2
        [HttpDelete]
        [Route("api/Dsc/{id}")]
        public async Task<IActionResult> DeleteDscReference([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dscReference = await _context.Dscreference.FindAsync(id);
            if (dscReference == null)
            {
                return NotFound();
            }

            _context.Dscreference.Remove(dscReference);
            await _context.SaveChangesAsync();

            return Ok(dscReference);
        }

        private bool DscReferenceExists(int id)
        {
            return _context.Dscreference.Any(e => e.Id == id);
        }
    }
}