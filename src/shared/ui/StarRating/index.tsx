export const StarRating = ({ activeStars = 0 }) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  
    return (
      <div className="elementor-element elementor-element-fc27a9a elementor-widget elementor-widget-rating">
        <div className="elementor-widget-container">
          <div className="e-rating">
            <div className="e-rating-wrapper">
              {stars.map((star) => (
                <div key={star} className="e-icon">
                  {star <= activeStars ? (
                    <>
                      <div className="e-icon-wrapper e-icon-marked">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-eicon-star"
                          viewBox="0 0 1000 1000"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                        </svg>
                      </div>
                      <div className="e-icon-wrapper e-icon-unmarked">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-eicon-star"
                          viewBox="0 0 1000 1000"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                        </svg>
                      </div>
                    </>
                  ) : (
                    <div className="e-icon-wrapper e-icon-unmarked">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg e-eicon-star"
                        viewBox="0 0 1000 1000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  