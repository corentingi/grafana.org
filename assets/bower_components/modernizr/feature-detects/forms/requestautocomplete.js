/*!
{
  "name": "form#requestAutocomplete()",
  "property": "requestautocomplete",
  "tags": ["form", "forms", "requestAutocomplete", "payments"],
  "notes": [{
    "name": "WHATWG proposed spec",
    "href": "http://wiki.whatwg.org/wiki/RequestAutocomplete"
  }]
}
!*/
define(["Modernizr","createElement","prefixed"],function(e,n,t){e.addTest("requestautocomplete",!!t("requestAutocomplete",n("form")))});