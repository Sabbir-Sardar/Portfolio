// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */

const ButtonPrimary = ({
    herf,
    target='_self',
    label,
    icon,
    classes
}) => {
    if (herf) {
        return (
            <a
            herf={herf}
            traget={traget}
            className={"btn btn-primary " + classes}
            >
                {label}

                {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                : undefined
                }
    
    
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}

                
            </button>

        )
    }
}

ButtonPrimary.propType = {
    label: PropTypes.string.isRequired,
    herf: PropTypes.string,
    traget: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


/**
 * Outline Button
 */

const ButtonOutline = ({
    herf,
    target='_self',
    label,
    icon,
    classes
}) => {
    if (herf) {
        return (
            <a
            herf={herf}
            traget={traget}
            className={"btn btn-outline " + classes}
            >
                {label}

                {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                : undefined
                }
    
    
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}

                
            </button>

        )
    }
}

ButtonOutline.propType = {
    label: PropTypes.string.isRequired,
    herf: PropTypes.string,
    traget: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}
export {
    ButtonPrimary,
    ButtonOutline
}