using Bussiness.Interfaces;
using Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.Managers
{
    public class LoginManager : ILoginManager
    {
        public bool Login(LoginRequestModel loginRequestModel)
        {
            return (loginRequestModel.UserName == "Harshad" && loginRequestModel.EmailID == "harshadnehate30@gmail.com");
            
        }
        
    }
}
