using Bussiness.Interfaces;
using Common.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace loginApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private ILoginManager _loginManager;
        public LoginController(ILoginManager loginManager)
        {
            _loginManager = loginManager;
        }
        [Route("LoginManager")]
        [HttpPost]
        public IActionResult Login(LoginRequestModel loginRequestModel)
        {
            Boolean IsLoggedIn = _loginManager.Login(loginRequestModel);
            if (IsLoggedIn)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
