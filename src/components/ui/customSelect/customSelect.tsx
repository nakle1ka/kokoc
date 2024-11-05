import React, { memo } from 'react';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '../select';

type Props = {
    trigger: string;
    items: string[];
    value: string;
    onChange: (newValue: string) => void;
}

export const CustomSelect: React.FC<Props> =({ trigger, items, value, onChange }) => {
    return (
        <Select onValueChange={(newValue) => onChange(newValue)} value={value}>
            <SelectTrigger>
                <SelectValue placeholder={trigger} />
            </SelectTrigger>

            <SelectContent>
                {items.map(i =>
                    <SelectItem
                        value={i}
                        key={i}
                    >{i}
                    </SelectItem>
                )}

            </SelectContent>
        </Select>
    );
}