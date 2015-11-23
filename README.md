# PostalCodeValidator
Based on PHP version https://github.com/sirprize/postal-code-validator
## Usage

### Check if we have mask defined for specific country
     PostalCodeValidatorJs.hasCountry('PL') //returns boolean
### Check if given postal code is valid
     PostalCodeValidatorJs.isValid('PL') //returns boolean

## Formatting

+ `#` = `0-9`
+ `@` = `a-zA-Z`
+ `*` = `a-zA-Z0-9`

## Country Codes

Postal-code-validator uses ISO 3166 2-letter country codes

## License

See LICENSE.
