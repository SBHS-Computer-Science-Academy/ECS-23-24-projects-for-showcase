function generateCard(names, imageName, altText, folderName)
{
  return '<div class="card text-center"> <div class="card-body"> <h5 class="card-title">'
    + names  
    + '</h5> <p class="card-text"> <a href="projects/'
    + folderName 
    + '/index.html"> <img src="images/' 
    + imageName 
    + '" alt="'
    + altText
    + '" class="screenshots"> </a> </p> </div> </div>';
}
