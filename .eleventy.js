const { datetime } = require ("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter("postDate"), (dateObj) => {
        return datetime.FromJSDate(dateObj).toLocaleString(datetime.Date_MED);
    };

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}