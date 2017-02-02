const articleResource = function($resource, API){
    return $resource(`${API.BASE_URL}${API.ARTICLE}/:id`, {id: '@_id'});
};

export default articleResource;
