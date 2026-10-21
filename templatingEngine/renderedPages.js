import { renderDocumentationPage, renderHomePage } from "./templatingEngine.js";
import { documentationPages } from "./pages.js";


export const homeHtml = renderHomePage();

const frontendPage = documentationPages.find(page => page.route === "/frontend");
export const frontendHtml = renderDocumentationPage(frontendPage);

const javascriptPage = documentationPages.find(page => page.route === "/javascript");
export const javascriptHtml = renderDocumentationPage(javascriptPage);

const nodejsPage = documentationPages.find(page => page.route === "/nodejs");
export const nodejsHtml = renderDocumentationPage(nodejsPage);

const expressPage = documentationPages.find(page => page.route === "/express");
export const expressHtml = renderDocumentationPage(expressPage);

const restApiPage = documentationPages.find(page => page.route === "/rest-api");
export const restApiHtml = renderDocumentationPage(restApiPage);

const securityPage = documentationPages.find(page => page.route === "/security");
export const securityHtml = renderDocumentationPage(securityPage);

const modulesPage = documentationPages.find(page => page.route === "/modules-deployment");
export const modulesHtml = renderDocumentationPage(modulesPage);
