import { ContactForm } from "./ContactForm";

export const LocationContactForm = () => {
  return (
    <div className="elementor-element elementor-element-2f88af9 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <ContactForm />
        <div className="elementor-element elementor-element-fe57940 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-ab3f0f0 elementor-widget elementor-widget-google_maps">
            <div className="elementor-widget-container">
              <div className="elementor-custom-embed">
                <iframe
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Philharmonic%20Hall%2C%20Bishkek%2C%20Kyrgyzstan&amp;t=m&amp;z=20&amp;output=embed&amp;iwloc=near"
                  title="Philharmonic Hall, Bishkek, Kyrgyzstan"
                  aria-label="Philharmonic Hall, Bishkek, Kyrgyzstan"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
