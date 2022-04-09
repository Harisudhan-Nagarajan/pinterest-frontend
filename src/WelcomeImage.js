import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

export function WelcomeImage() {
  const imgarray = [
    "https://i0.wp.com/www.insidene.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-07-at-10.28.00-AM.jpeg?fit=680%2C680&ssl=1",
    "https://cdn.wrytin.com/images/wrytup/r/1024/thanjai-2bperiya-2bkovil-2bhistory-2bin-2btamil-2blanguage-2bpdf-jqw9jpcw.jpeg",
    "https://www.thespruceeats.com/thmb/I_M3fmEbCeNceaPrOP5_xNZ2xko=/3160x2107/filters:fill(auto,1)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg",
    "https://static.onecms.io/wp-content/uploads/sites/19/2014/04/02/chai-su-x.jpg",
    "https://i.pinimg.com/originals/f4/e6/cf/f4e6cf508d2aab6adff4d396b5a6943d.jpg",
    "https://news.maxabout.com/wp-content/uploads/2019/10/Kawasaki-Ninja-ZX-25R-Official-1.jpg",
    "https://images.firstpost.com/wp-content/uploads/2021/03/chennaimural5-min.jpg",
    "https://s3images.zee5.com/wp-content/uploads/2021/08/dogs-age-years-kb-inline-200707_7d0bca498155db9ae60dd81dec0ba6ab.jpg",
    "https://fashionstyle.guru/wp-content/uploads/2018/10/sherwani-202x300.png",
    "https://www.southtourism.in/blog/wp-content/uploads/2020/01/pongal-festival-celebration.jpg",
    "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/un0381303.jpg?itok=SaL3L4vb",
    "https://static.tweaktown.com/news/8/2/82744_01_earth-found-to-have-second-moon-but-it-wont-be-around-forever_full.jpg",
    "https://cdn.pixabay.com/photo/2018/05/02/17/32/tree-3369172_1280.jpg",
    "https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Kenya_112367/story_full_width/qxyqxqjtu_WW187785.jpg",
    "https://www.thethirdpole.net/content/uploads/2021/02/DT865R.jpg",
  ];
  return (
    <div id="welcome-center">
      <h1 style={{ color: "#e60023" }}>
        Get your next <br />
        Ideas
      </h1>
      <Box sx={{ paddingTop: "0rem", paddingLeft: "10px", }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 4, lg: 5, xl: 6 }} spacing={1}>
          {imgarray.map((item, index) => (
            <div key={index}>
              <img
                src={`${item}?w=162&auto=format`}
                srcSet={`${item}?w=162&auto=format&dpr=2 2x`}
                alt="Hi"
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: "2rem",
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}
