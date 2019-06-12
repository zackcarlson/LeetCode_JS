function groupAnagrams(strs) {
  let grouped = {};

  for (let str of strs) {
    let group = str.split('').sort().join('');
      
    if (!grouped[group]) {
      grouped[group] = [];
    }

    grouped[group].push(str);
  }
  
  return Object.values(grouped);
}

module.exports = groupAnagrams;
