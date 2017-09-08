package io.jenkins.plugins.retrocean;

import hudson.Extension;
import io.jenkins.blueocean.commons.PageStatePreloader;

/**
  */
@Extension
public class Retrocean extends PageStatePreloader {

    @Override
    public String getStatePropertyPath() {
        return "retrocean";
    }
     @Override
    public String getStateJson() {
        return "{}";
    }
}
