const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://th.bing.com/th/id/R.abc38541f54522e2a39ee93bdec1a74c?rik=x4YOCTft3LQB8g&pid=ImgRaw&r=0",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://bit.ly/3COjOgd",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://bit.ly/3CFRlco",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://bit.ly/3r4j2cF",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://bit.ly/3HNo9Uu",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
