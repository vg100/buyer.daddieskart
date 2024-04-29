
import ReactGA from 'react-ga';

class UTMUtils {
  constructor() {
    ReactGA.initialize('YOUR_TRACKING_ID');
  }

  extractUTMParameters(url) {
    const urlParams = new URLSearchParams(url);
    return {
      utmSource: urlParams.get('utm_source'),
      utmMedium: urlParams.get('utm_medium'),
      utmCampaign: urlParams.get('utm_campaign'),
      utmTerm: urlParams.get('utm_term'),
      utmContent: urlParams.get('utm_content'),
    };
  }

  sendUTMToGA(utmParameters) {
    ReactGA.set({
      dimension1: utmParameters.utmSource || '(not set)',
      dimension2: utmParameters.utmMedium || '(not set)',
      dimension3: utmParameters.utmCampaign || '(not set)',
      dimension4: utmParameters.utmTerm || '(not set)',
      dimension5: utmParameters.utmContent || '(not set)',
    });
  }

  sendPageviewWithUTMToGA(pathname, search, title) {
    const utmParameters = this.extractUTMParameters(search);
    this.sendUTMToGA(utmParameters);
    ReactGA.pageview(pathname + search, [], title);
  }

  trackEventWithUTM({ category, action, label, value, nonInteraction }) {
    const utmParameters = this.extractUTMParameters(window.location.search);
    ReactGA.event({
      category,
      action,
      label,
      value,
      nonInteraction,
      ...utmParameters,
    });
  }

  setUpCrossDomainTracking(domains) {
    ReactGA.ga('require', 'linker');
    ReactGA.ga('linker:autoLink', domains);
  }

  trackECommerceTransaction(transactionId, affiliation, revenue, shipping, tax) {
    const utmParameters = this.extractUTMParameters(window.location.search);
    ReactGA.plugin.execute('ecommerce', 'addTransaction', {
      id: transactionId,
      affiliation,
      revenue,
      shipping,
      tax,
      ...utmParameters,
    });
    ReactGA.plugin.execute('ecommerce', 'send');
  }
}

export default new UTMUtils();
