<?php

namespace Example\Module\ViewModel;

use Magento\Framework\View\Element\Block\ArgumentInterface;

// Define an implementation of ArgumentInterface returning the desired output.
class Message implements ArgumentInterface
{
    public function getMessage()
    {
        return str_shuffle('declarative test');
    }
}
