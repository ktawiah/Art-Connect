"use client"
import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    window.ga = function () {
      window.ga.q.push(arguments);
    };
    window.ga.q = [];
    window.ga.l = +new Date();

    window.ga('create', 'UA-XXXXX-Y', 'auto');
    window.ga('set', 'anonymizeIp', true);
    window.ga('set', 'transport', 'beacon');
    window.ga('send', 'pageview');
  }, []);

  return <></>; // This component doesn't render anything visible
};

export default GoogleAnalytics;
