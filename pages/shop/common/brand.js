import React, { useState, useContext } from "react";
import { Collapse, Input } from "reactstrap";
import FilterContext from "../../../helpers/filter/FilterContext";

const Brand = ({ data, loading }) => {
  const context = useContext(FilterContext);
  const isChecked = context.isChecked;
  const filterChecked = context.filterChecked;
  const [isOpen, setIsOpen] = useState(false);
  const toggleBrand = () => setIsOpen(!isOpen);

  return (
    <div className="collection-collapse-block open">
      <h3 className="collapse-block-title" onClick={toggleBrand}>
        brand
      </h3>
      <Collapse isOpen={isOpen}>
        <div className="collection-collapse-block-content">
          <div className="collection-brand-filter">
            {!data || data.length === 0 || loading
              ? "loading"
              : data &&
                data.map((brand, index) => (
                  <div
                    className="custom-control custom-checkbox collection-filter-checkbox"
                    key={index}
                  >
                    <Input
                      checked={context.selectedBrands.includes(brand)}
                      onChange={() => {
                        context.handleBrands(brand._id, isChecked);
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id={brand.title}
                    />
                    <label className="custom-control-label" htmlFor={brand.title}>
                      {brand.title}
                    </label>
                  </div>
                ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Brand;
