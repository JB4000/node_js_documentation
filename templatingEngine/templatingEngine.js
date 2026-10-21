import fs from "fs";
import path from "path";
import { createSubjectGroups } from "./navigation.js";


export function readPage(filePath) {
    return fs.readFileSync(filePath, "utf8");
}

export function readComponent(componentName) {
    const filePath = path.join("public", "components", `${componentName}.html`);

    return fs.readFileSync(filePath, "utf8");
}

export function createSidebar(currentRoute) {
    const sidebar = readComponent("sidebar");
    const navigation = createSubjectGroups(currentRoute);

    return sidebar.replace("{{navigation}}", navigation);
}

export function createHead(tabTitle) {
    const head = readComponent("head");

    return head.replace("{{tabTitle}}", tabTitle);
}

export function constructPage(tabTitle, currentRoute, content) {
    let layout = readComponent("layout");

    const head = createHead(tabTitle);
    const header = readComponent("header");
    const sidebar = createSidebar(currentRoute);
    const footer = readComponent("footer");

    layout = layout.replace("{{head}}", head);
    layout = layout.replace("{{header}}", header);
    layout = layout.replace("{{sidebar}}", sidebar);
    layout = layout.replace("{{content}}", content);
    layout = layout.replace("{{footer}}", footer);

    return layout;
}

export function readArticle(filePath) {
    const html = readPage(filePath);

    const articleStart = html.indexOf('<article class="documentation-content">');
    const articleEnd = html.indexOf("</article>", articleStart);

    return html.slice(articleStart, articleEnd + "</article>".length);
}

export function renderDocumentationPage(page) {
    const article = readArticle(page.file);

    return constructPage(page.title, page.route, article);
}

export function renderHomePage() {
    const article = readArticle('public/frontpage/index.html');

    return constructPage(
        'Node.js Course Documentation',
        '/',
        article
    );
}
