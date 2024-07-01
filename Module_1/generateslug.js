function generateSlug(title) {
    // Write your code inside this function only.
    let emp = title.toLowerCase().split(' ').join("-")
    return emp+'.com';



}
console.log(generateSlug("AlmaBetter Web Dev"))