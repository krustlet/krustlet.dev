# krustlet.dev

![krustlet-website](https://github.com/krustlet/krustlet.dev/blob/main/art/styleguide/website.jpg?raw=true)

Welcome to the source file repository for the [krustlet.dev](https://krustlet.dev). The website is a simple static site, built with [Hugo](https://gohugo.io/) and hosted on [Netlify](https://app.netlify.com/sites/krustlet-dev/).

## Structure

There are various parts to a hugo site, these are the key bits:

```text
/public        // 'dist' generated website - do not edit
/resources     // compiled css assets - do not edit
/themes        // source files for the website - edits go here
config.yaml
```

Looking for logos? Latest brand assets for Krustlet can be found in the [/art](https://github.com/krustlet/krustlet.dev/tree/main/art) directory.

## Development

```text
// run hugo to have the pipes rebuild and recompile
$ hugo

// make sure to commit the generated results to git
$ git add resources/*
```

### Editing the Content

The website is broken up into html partials per section (e.g. navbar, footer, about, community). To edit the content, you need to modify [these source html files](https://github.com/krustlet/krustlet.dev/tree/main/themes/clean-landing/layouts/partials) in the site theme.

In addition, certain pieces of content are set globally via the [config.yaml](https://github.com/krustlet/krustlet.dev/blob/main/config.yaml#L10) file:

* site descrition
* site webfonts
* navbar: links
* about section: feature points
* _etc_

### Editing the Theme

The site uses a custom Hugo theme called [clean-landing], which is a boilerplate based off of the [hugo-fresh](https://themes.gohugo.io/hugo-fresh/) theme by Luc Perkins. The theme uses the Bulma css framework, which provides a mobile-friendly reponsive grid (using flexbox), icon sets and easily configurable site parameters.

* [Theme parameters](https://github.com/krustlet/krustlet.dev/blob/main/config.yaml#L10)
* [Bulma CSS docs](https://bulma.io/)

Any design changes should be to the source SASS files here, which are will generate new CSS files each time Hugo recompiles, via [hugo pipes](https://gohugo.io/hugo-pipes/). Remember to commit any changes to the generated css/js files afterwards (the `/resources` folder)!

## Deployment

The site is automatically rebuilt on Netlify when changes are merged into the `main` branch. You view build logs by clicking on the badge below:

[![Netlify Status](https://api.netlify.com/api/v1/badges/71268e4a-3898-4b72-b2b4-de95aa38b2ec/deploy-status)](https://app.netlify.com/sites/krustlet-dev/deploys)

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
