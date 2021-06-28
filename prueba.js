'use strict';
var request = require('request');
const cron = require('node-cron');
const express = require('express');
const fs = require('fs');
require('dotenv').config();

var i = 0;
cron.schedule('* * * * *', function() {
     console.log(i);
     i++;
});