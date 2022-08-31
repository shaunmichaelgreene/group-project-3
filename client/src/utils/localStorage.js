export const getSavedPodcastIds = () => {
    const savedPodcastIds = localStorage.getItem('saved_podcasts')
      ? JSON.parse(localStorage.getItem('saved_podcasts'))
      : [];
  
    return savedPodcastIds;
  };
  
  export const savePodcastIds = (podcastIdArr) => {
    if (podcastIdArr.length) {
      localStorage.setItem('saved_podcasts', JSON.stringify(podcastIdArr));
    } else {
      localStorage.removeItem('saved_podcasts');
    }
  };
  
  export const removePodcastId = (podcastId) => {
    const savedPodcastIds = localStorage.getItem('saved_podcasts')
      ? JSON.parse(localStorage.getItem('saved_podcasts'))
      : null;
  
    if (!savedPodcastIds) {
      return false;
    }
  
    const updatedSavedPodcastIds = savedPodcastIds?.filter((savedPodcastId) => savedPodcastId !== podcastId);
    localStorage.setItem('saved_podcasts', JSON.stringify(updatedSavedPodcastIds));
  
    return true;
  };
  