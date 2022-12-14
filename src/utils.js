export const colors = [ 'green', 'pink', 'yellow', 'blue', 'green'];

export const groupedELements = (articles) => {
    const groupByCategory = articles.reduce((group, article) => {
        const { sectionName } = article;
        group[sectionName] = group[sectionName] ?? [];
        group[sectionName].push(article);
        return group;
      }, {});
      return groupByCategory
}
