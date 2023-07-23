<?php
/**
 * Copyright © Robin. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Buhmann\TestForm\Block;

class Form extends \Magento\Framework\View\Element\Template
{
    /**
     * @return string
     */
    public function getJsLayout()
    {
        if(!$this->jsLayout){
            $this->jsLayout = [];
        }
        return json_encode($this->jsLayout);
    }
}
