let videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 2,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 3,
    },
  ];
  
  export const trending = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
  };
  export const watch = (req, res) => {
    // req 는 URL (/video/:id)에서 받은 변수정보를 담음.
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("watch", { pageTitle: `Watching - ${video.title}`, video });
  };
  export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("edit", {pageTitle: `Editing - ${video.title}`, video});
  }
  export const postEdit = () => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id-1].title = title; // 지금은 DB 가 아님
    return res.redirct(`/video/${id}`);
  }