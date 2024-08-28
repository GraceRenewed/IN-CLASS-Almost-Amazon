import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyFavAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showFavorites = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
          <p class="card-text bold">${item.favorite ? '<span class="badge badge-info sale-badge"><i  </i> Favorite</i> ' : ''}</p>
        <hr>
        <i class="btn btn-success" id="view-author-btn--${item.firebaseKey}">View</i>
        <i class="btn btn-info" id="update-author--${item.firebaseKey}">Update</i>
        <i class="btn btn-danger" id="delete-author-btn--${item.firebaseKey}">Delete</i>
      </div>
    </div>`;
  });
  renderToDOM('#store', domString);
};

export { emptyFavAuthors, showFavorites };
