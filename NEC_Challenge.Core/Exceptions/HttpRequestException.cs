﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NEC_Challenge.Core.Exceptions
{
    public class HttpRequestException : Exception
    {
        public HttpRequestException(string message) : base(message)
        {

        }
    }
}