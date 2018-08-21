const fs = require('fs');
const { getRC } = require('../utils.js');
const R = require('ramda');
const { sortBySection } = require('./sortBySection.js');

/**
 * @description Execute various sorting functions
 * @param commentBlocks {[]} The Cleaned AST with parsed information
 * @return ats {[]} The AST "sorted" with appropriate headers and priorities
 * assigned to it.
 */

const execSorts = (commentBlocks) => {
  // extract an array of files to be sorted
  // const sortFiles = gutenrc.skeleton.sortByOrder;
  // console.log(ast);
  // execute a piping function sequence here
  const pathData = getRC();
  var testa = (x) => {console.log(x); return x++;};
  var testb = (x) => {console.log(x); return x++;};
  var testc = () => {console.log(x); return x++;};
  
  var pipe = R.pipe(testa, testb, testc);
  pipe(1);
  const gutenRC = JSON.parse(fs.readFileSync(pathData.absPath.concat('.gutenrc.json')));
  const sectionName = gutenRC.skeleton.sortBySections.sections;
  const priority = 1;
  return sortBySection(commentBlocks, sectionName, priority);
};


/**
 * @description This will cleanup the incoming AST structure
 * @param ast {[]} The AST with parsed information
 * @return commentBlocks {[]} Return an array of commentBlock objects.Each object
 * will be in the following format as an object:
 *
 *  {
 *   header: (string or undefined),
 *   priority: (number or undefined),
 *   description: (string),
 *   tags: [{title: (string), description: (string)}]
 *  }
 */

const cleanAST = (ast) => {
  const commentBlocks = [];

  ast.forEach((file) => {
    file.content.forEach((commentBlock) => {
      commentBlocks.push({
        header: undefined,
        priority: undefined,
        description: commentBlock.description,
        tags: commentBlock.tags,
        name: commentBlock.name,
        pathName: file.fileName,
      });
    });
  });

  return commentBlocks;
};

module.exports.execSorts = execSorts;
module.exports.cleanAST = cleanAST;